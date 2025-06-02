package com.example.react13_project03_server.service;

import com.example.react13_project03_server.DTO.DiaryDTO;
import com.example.react13_project03_server.entity.DiaryEntity;
import com.example.react13_project03_server.repository.DiaryRepository;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
@RequiredArgsConstructor
@Data
public class DiaryServiceImpl implements DiaryService{

    private final DiaryRepository diaryRepository;

    // 추가
    @Override
    public DiaryDTO insertDiary(DiaryDTO dto) {
        return entityToDto(diaryRepository.save(dtoToEntity(dto)));
    }

    // 전체보기
    @Override
    public List<DiaryDTO> findAllDiary() {
        List<DiaryEntity> entityList = diaryRepository.findAll();
        List<DiaryDTO> dtoList = entityList.stream()
                .map(entity -> entityToDto(entity)).toList();
        log.info(dtoList.toString());
        return dtoList;
    }

    // 상세보기
    @Override
    public DiaryDTO findDiaryById(Long id) {
        DiaryEntity entity = diaryRepository.findById(id).get();
        DiaryDTO dto = entityToDto(entity);
        return dto;
    }
    
    // 수정하기
    // 더티체킹
    @Override
    @Transactional
    public void updateDiary(DiaryDTO dto) {
        log.info("Updating diary : " + dto);
        //영속성 컨텍스트에 있는 diary 객체(수정할 객체) rkwudhrl
        DiaryEntity updatedEntity = dtoToEntity(dto);
        DiaryEntity yetEntity = diaryRepository.findById(dto.getId()).get();
        // 가져온 diary 개체를 수정 ===> flush
        // diary는 수정할 내용인 감긴 Diary 객체
        yetEntity.setDate(updatedEntity.getDate());
        yetEntity.setContent(updatedEntity.getContent());
        yetEntity.setEmotionId(updatedEntity.getEmotionId());

        DiaryEntity savedEntity = diaryRepository.save(yetEntity);

    }

    //삭제하기
    @Override
    public void deleteDiary(Long id) {
        diaryRepository.deleteById(id);
    }

}
