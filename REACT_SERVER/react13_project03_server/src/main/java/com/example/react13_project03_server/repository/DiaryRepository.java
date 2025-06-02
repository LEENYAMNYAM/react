package com.example.react13_project03_server.repository;

import com.example.react13_project03_server.entity.DiaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiaryRepository extends JpaRepository<DiaryEntity, Long> {
}
