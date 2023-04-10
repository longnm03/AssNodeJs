import Joi from "joi";
import Category from "../models/category";
import Product from "../models/product";
const CategorySchema = Joi.object({
  name: Joi.string().required(),
});

export const create = async (req, res) => {
  try {
    const body = req.body;
    const { error } = CategorySchema.validate(body);
    if (error) {
      const errors = error.details.map((errorItem) => errorItem.message);
      return res.status(400).json({
        message: errors.message,
      });
    }

    const data = await Category.create(body);
    if (!data) {
      return res.status(400).json({ message: "Thêm danh mục thất bại" });
    }
    return res.json({
      message: "Thêm danh mục  thành công",
      data,
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
export const get = async function (req, res) {
  try {
    const category = await Category.findOne({ _id: req.params.id }).populate(
      "products"
    );
    if (!category) {
      return res.status(400).json({ message: "Không có category nào" });
    }

    return res.json(category);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return res.status(400).json({
        message: "Không có danh mục nào",
      });
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const category = await Category.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!category) {
      return res.status(400).json({ message: "Cập nhật thất bại" });
    }
    return res.json({
      message: "Cập nhật thành công",
      category,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    return res.json({ message: "Xóa thành công", category });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
