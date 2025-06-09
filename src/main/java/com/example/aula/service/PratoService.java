package com.example.aula.service;

import com.example.aula.exception.NomeJaCadastradoException;
import com.example.aula.exception.RecursoNaoEncontradoException;
import com.example.aula.model.Prato;
import com.example.aula.repository.PratoRepository;
import org.springframework.stereotype.Service;
import jakarta.validation.Valid;

import java.util.List;

@Service
public class PratoService {

    private final PratoRepository pratoRepository;

    public PratoService(PratoRepository pratoRepository) {
        this.pratoRepository = pratoRepository;
    }

    public List<Prato> listarTodos() {
        return pratoRepository.findAll();
    }

    public Prato buscarPorId(Long id) {
        return pratoRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Prato com ID " + id + " não encontrado."));
    }

    public Prato salvar(@Valid Prato prato) {
        pratoRepository.findByNomePrato(prato.getNomePrato())
            .ifPresent(p -> {
                throw new NomeJaCadastradoException("Já existe um prato cadastrado com este nome.");
            });
        return pratoRepository.save(prato);
    }

    public Prato atualizar(Long id, @Valid Prato prato) {
        Prato pratoAtualizar = buscarPorId(id); // Reutiliza o método de busca

        pratoAtualizar.setCategoria(prato.getCategoria());
        pratoAtualizar.setDescricao(prato.getDescricao());
        pratoAtualizar.setDisponibilidade(prato.getDisponibilidade());
        pratoAtualizar.setPreco(prato.getPreco());
        pratoAtualizar.setNomePrato(prato.getNomePrato());
        pratoAtualizar.setUrlImagem(prato.getUrlImagem());

        return pratoRepository.save(pratoAtualizar);
    }

    public void excluir(Long id) {
        Prato pratoParaExcluir = buscarPorId(id); // Reutiliza o método de busca
        pratoRepository.delete(pratoParaExcluir);
    }
}