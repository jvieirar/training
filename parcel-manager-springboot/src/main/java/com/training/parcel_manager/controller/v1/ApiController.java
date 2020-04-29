package com.training.parcel_manager.controller.v1;

import java.util.List;

import com.training.parcel_manager.model.Carrier;
import com.training.parcel_manager.service.CarrierService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/carrier")
public class ApiController {
  private final CarrierService carrierService;

  public ApiController(CarrierService carrierService) {
    this.carrierService = carrierService;
  }

  @GetMapping("/list")
  public ResponseEntity<List<Carrier>> findAllCarriers() {
    List<Carrier> allCarriers = carrierService.getAllCarriers();
    return new ResponseEntity<>(allCarriers, HttpStatus.OK);
  }

}