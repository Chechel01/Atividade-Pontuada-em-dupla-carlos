package com.example.aula.repository;

import com.example.aula.model.Prato;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface PratoRepository extends JpaRepository<Prato, Long> {
    // Método para buscar pelo campo 'nomePrato' na classe Prato.
    Optional<Prato> findByNomePrato(String nomePrato);
}