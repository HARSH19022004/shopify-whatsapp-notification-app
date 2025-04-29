import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "order" model, go to https://assingment4.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "lXV_ZGC0pZ4X",
  comment:
    "Represents a customer order with key details such as order ID, customer name, and total price.",
  fields: {
    customerName: {
      type: "string",
      validations: { required: true },
      storageKey: "zJ_nWwVXXk3N",
    },
    orderId: {
      type: "string",
      validations: { required: true, unique: true },
      storageKey: "luVW6GnEMVlA",
    },
    totalPrice: {
      type: "number",
      decimals: 2,
      validations: {
        required: true,
        numberRange: { min: 0, max: null },
      },
      storageKey: "egEEpbmVIwuY",
    },
  },
};
