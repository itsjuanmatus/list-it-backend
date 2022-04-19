import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(payload) {
    const newProduct = new this.productModel(payload);
    const result = await newProduct.save();
    return result.id;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      price: prod.price,
      description: prod.description,
    })) as Product[];
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  async updateProduct(product) {
    const updateProduct = Object.keys(product).reduce((acc, key) => {
      if (product[key] !== undefined) {
        acc[key] = product[key];
      }
      return acc;
    }, {});

    await this.productModel
      .updateOne({ _id: product.id }, updateProduct)
      .exec();

    return null;
  }

  async deleteProduct(prodId: string) {
    await this.productModel.deleteOne({ _id: prodId }).exec();
  }

  private async findProduct(id: string): Promise<Product> {
    let product;

    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }

    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
