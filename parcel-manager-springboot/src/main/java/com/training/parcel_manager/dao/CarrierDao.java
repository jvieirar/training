package com.training.parcel_manager.dao;

import java.util.List;

import com.training.parcel_manager.model.Carrier;

import org.springframework.data.repository.CrudRepository;

public interface CarrierDao extends CrudRepository<Carrier, Long> {
  @Override
  List<Carrier> findAll();

  Carrier findByName(String name);
}