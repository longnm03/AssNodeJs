import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    products: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, versionKey: false }
);
// categorySchema.pre("findOneAndDelete", async function (next) {
//   try {
//     const filter = this.getFilter(); // Lấy điều kiện tìm kiếm hiện tại của truy vấn
//     const categoryId = this.getQuery().$set?.categoryId; // Lấy giá trị mới của trường categoryId nếu có
//     const update = {
//       categoryId: categoryId ?? "uncategorized", // Cập nhật categoryId mới hoặc "uncategorized" nếu không có giá trị mới
//     };
//     const { n } = await new this.model("Product").updateMany(
//       { categoryId: filter._id }, // Tìm các sản phẩm cùng categoryId
//       update // Cập nhật categoryId mới
//     );
//     console.log(`Updated ${n} products`);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });
export default mongoose.model("Category", categorySchema);
