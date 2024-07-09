package com.thales.swigy1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.thales.swigy1.products.ProductData;

@Repository
public interface SwigyRepository extends JpaRepository<ProductData, Integer>{
	
}


