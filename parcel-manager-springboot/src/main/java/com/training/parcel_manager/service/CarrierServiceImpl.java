package com.training.parcel_manager.service;

import java.util.List;

import com.training.parcel_manager.dao.CarrierDao;
import com.training.parcel_manager.model.Carrier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarrierServiceImpl implements CarrierService {
  @Autowired
  CarrierDao carrierDao;

  @Override
  public List<Carrier> getAllCarriers() {
    List<Carrier> carriers = carrierDao.findAll();
    return carriers;
  }

}