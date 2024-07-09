package com.thales.swigy1.exception;

@SuppressWarnings("serial")
public class ResourceNotFound extends RuntimeException {
    public ResourceNotFound(String message) {
        super(message);
    }
}
