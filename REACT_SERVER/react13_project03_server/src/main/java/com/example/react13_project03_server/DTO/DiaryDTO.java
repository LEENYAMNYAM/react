package com.example.react13_project03_server.DTO;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter @Setter
@RequiredArgsConstructor
public class DiaryDTO {

    private Long id;
    private Date date;
    private String content;
    private Integer emotionId;
}
