/**
 * @typedef {import("gadget-server").RouteHandler} RouteHandler
 */

/**
 * Route handler for creating orders via REST API
 * @type {RouteHandler<{Body: {orderId: string, customerName: string, totalPrice: number}}>}
 */
const route = async ({ request, reply, api, logger }) => {
  try {
    // Extract order data from request body
    const { orderId, customerName, totalPrice } = request.body;

    // Create the order using the Gadget API
    const result = await api.order.create({
      orderId,
      customerName,
      totalPrice
    });

    // Return the created order with 201 Created status
    await reply.code(201).send({
      success: true,
      message: "Order created successfully",
      order: result
    });
  } catch (error) {
    // Log the error
    logger.error({ error }, "Error creating order");

    // Handle validation errors from the API
    if (error.code === "GADGET_API_ERROR" && error.errors) {
      await reply.code(400).send({
        success: false,
        message: "Failed to create order due to validation errors",
        errors: error.errors
      });
    } else {
      // Handle other errors
      await reply.code(500).send({
        success: false,
        message: "An internal error occurred while creating the order"
      });
    }
  }
};

// Define route options for validating the request body
route.options = {
  schema: {
    body: {
      type: "object",
      required: ["orderId", "customerName", "totalPrice"],
      properties: {
        orderId: { type: "string" },
        customerName: { type: "string" },
        totalPrice: { 
          type: "number",
          minimum: 0
        }
      }
    }
  }
};

export default route;