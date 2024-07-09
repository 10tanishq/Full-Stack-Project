package com.thales.swigy1.products;

import javax.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Embeddable
public class ProductData {

        @Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name ="id" ,length = 10, nullable = false)
		private int id;
		@Column(name ="price" ,length = 10, nullable = false)
		private int price;
		@Column(name ="itemName" ,length = 10, nullable = false)
		private String itemName;
		@Column(name ="quantity" ,length = 10, nullable = false)
		private int quantity;
		
		public ProductData(int id, int price, String itemName, int quantity) {
			super();
			this.id = id;
			this.price = price;
			this.itemName = itemName;
			this.quantity = quantity;
		}
		
		public ProductData() {
		    }
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		
		public int getPrice() {
			return price;
		}
		public void setPrice(int price) {
			this.price = price;
		}
		
		public String getItemName() {
			return itemName;
		}
		public void setItemName(String itemName) {
			this.itemName = itemName;
		}
		
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		
}
