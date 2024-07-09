package com.thales.swigy1.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFound.class)
    public ResponseEntity<String> handleResourceNotFound(ResourceNotFound exception) {
        return new ResponseEntity<>("Resource you are trying to perrform operation with doesnt exists, \nPlease enter a valid id", HttpStatus.NOT_FOUND);
    }
}
