import mongoose from "mongoose";

const VandorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ownername: {
      type: String,
      required: true,
    },
    foodtype: {
      type: [String],
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    serviceavailable: {
      type: Boolean,
    },
    coverimage: {
      type: [String],
    },
    rating: {
      type: Number,
      default: 0,
    },
    // foods: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'food'
    // },
  },
  {
    timestamps: true, 
  }
);

const Vandor = mongoose.model("Vandor", VandorSchema);

export default Vandor;
