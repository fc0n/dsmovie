package com.devsupeior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsupeior.dsmovie.dto.ScoreDTO;
import com.devsupeior.dsmovie.entites.Score;

public interface ScoreRepository extends JpaRepository<Score, ScoreDTO> {

}
