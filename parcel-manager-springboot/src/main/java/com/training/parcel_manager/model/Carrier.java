package com.training.parcel_manager.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;
import lombok.Getter;

@Entity
@Data
@JsonInclude
public class Carrier {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonIgnore
  private Long id;

  @Column
  @Getter
  private String name;

  @CreationTimestamp
  @Column(name = "created_on")
  private Timestamp createdOn;

  @UpdateTimestamp
  @Column(name = "updated_on")
  private Timestamp updatedOn;
}