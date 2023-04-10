import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    images: String,
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true, versionKey: false }
);
productSchema.methods.forceDelete = async function () {
  await this.model("Product").deleteOne({ _id: this._id });
};
productSchema.plugin(mongoosePaginate);

export default mongoose.model("Product", productSchema);
