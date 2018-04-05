import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品", ["电子商品", "硬件设备"]),
    new Product(2, "第二个商品", 2.99, 2.5, "这是第二个商品", ["电子商品"]),
    new Product(3, "第三个商品", 3.99, 1.5, "这是第三个商品", ["图书", "桌椅"]),
    new Product(4, "第四个商品", 4.99, 3.5, "这是第四个商品", ["电子商品", "硬件设备"]),
    new Product(5, "第五个商品", 5.99, 4.5, "这是第五个商品", ["硬件设备"]),
    new Product(6, "第六个商品", 6.99, 2.5, "这是第六个商品", ["书籍"]),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2017-01-03 13:33:33", "张三", 3, "还不错,还可以"),
    new Comment(2, 1, "2017-02-03 13:33:33", "李四", 3, "还不错，不好"),
    new Comment(3, 1, "2017-03-03 13:33:33", "王五", 1, "不好"),
    new Comment(4, 2, "2017-04-03 13:33:33", "赵五", 3, "还不错"),
    new Comment(5, 3, "2017-05-03 13:33:33", "马云", 3, "还不错"),
    new Comment(6, 4, "2017-06-03 13:33:33", "码云", 3, "还不错"),
  ]

  constructor() { }
  getProducts() {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productID == id);
  }
}

// 定义产品信息
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}


export class Comment {
  constructor(
    public id: number,
    public productID: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string) {

  }
}


