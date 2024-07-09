package com.thales.swigy1.service;
import java.util.List;

import com.thales.swigy1.products.ProductData;


public interface SwigyServices {
	 ProductData getProductById(int id);
	 List<ProductData> getAllProducts();
	 ProductData addProduct(ProductData product);
	 ProductData updateProduct(int id, ProductData product);
	 void deleteProduct(int id);
}
