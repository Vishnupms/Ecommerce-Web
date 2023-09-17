import categorySchema from "../models/categorySchema.js"; // Import the Category model
import subCategorySchema from "../models/subCategorySchema.js";
// Define a function to create a new category
export const createCategory = async (req, res) => {
  try {
    // Parse the request body to get category details
    const { name, description, status } = req.body;

    // Create a new category instance
    const newCategory = new categorySchema({
      name,
      description,
      status,
    });

    // Save the category to the database
    await newCategory.save();

    // Respond with a success message
    res.status(201).json({ message: 'Category created successfully', category: newCategory });
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error creating category:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Define a function to create a new subcategory
export const createSubCategory = async (req, res) => {
  try {
    // Parse the request body to get subcategory details and the associated category ID
    const { category_id, subCategory } = req.body;

    // Check if the specified category exists in the database
    const category = await categorySchema.findById(category_id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Create a new subcategory instance associated with the category
    const newSubCategory = new subCategorySchema({
      category_id,
      subCategory,
    });

    // Save the subcategory to the database
    await newSubCategory.save();

    // Respond with a success message
    res.status(201).json({ message: 'Subcategory created successfully', subcategory: newSubCategory });
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error creating subcategory:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


