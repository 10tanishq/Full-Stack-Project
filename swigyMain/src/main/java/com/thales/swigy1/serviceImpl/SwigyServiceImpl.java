package com.thales.swigy1.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thales.swigy1.exception.ResourceNotFound;
import com.thales.swigy1.products.ProductData;
import com.thales.swigy1.repository.SwigyRepository;
import com.thales.swigy1.service.SwigyServices;

@Service
public class SwigyServiceImpl implements SwigyServices {

    @Autowired
    private SwigyRepository swigyRepository;

    @Override
    public ProductData getProductById(int id) {
        Optional<ProductData> product = swigyRepository.findById(id);
        if (product.isPresent()) {
            return product.get();
        } else {
            throw new ResourceNotFound("Product with id " + id + " not found");
        }
    }

    @Override
    public List<ProductData> getAllProducts() {
        return swigyRepository.findAll();
    }

    @Override
    public ProductData addProduct(ProductData product) {
        return swigyRepository.save(product);
    }

    @Override
    public ProductData updateProduct(int id, ProductData product) {
        if (swigyRepository.existsById(id)) {
            product.setId(id);
            return swigyRepository.save(product);
        } else {
            throw new ResourceNotFound("Product with id " + id + " not found");
        }
    }

    @Override
    public void deleteProduct(int id) {
        if (swigyRepository.existsById(id)) {
            swigyRepository.deleteById(id);
        } else {
            throw new ResourceNotFound("Product with id " + id + " not found");
        }
    }
}
