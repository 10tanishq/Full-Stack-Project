package com.thales.swigy1.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thales.swigy1.products.ProductData;
import com.thales.swigy1.serviceImpl.SwigyServiceImpl;

@RestController
@RequestMapping("api/products")
public class SwigyController {


    @Autowired
    SwigyServiceImpl swigyServiceImpl;

    @GetMapping
    public List<ProductData> getAllProducts() {
        System.out.println("GET /api/products called");
        return swigyServiceImpl.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductData> getProductById(@PathVariable int id) {
        ProductData product = swigyServiceImpl.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping
    public ProductData addProduct(@RequestBody ProductData product) {
        System.out.println("POST /api/products called");
        return swigyServiceImpl.addProduct(product);
    }

    @PutMapping("/{id}")
    public ProductData updateProduct(@PathVariable int id, @RequestBody ProductData product) {
        System.out.println("PUT /api/products/" + id + " called");
        return swigyServiceImpl.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable int id) {
        System.out.println("DELETE /api/products/" + id + " called");
        swigyServiceImpl.deleteProduct(id);
    }
}

