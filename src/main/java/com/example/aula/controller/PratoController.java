package com.example.aula.controller;

import com.example.aula.model.Prato;
import com.example.aula.service.PratoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") // Em produção, defina a origem exata
@RestController
@RequestMapping("/pratos")
public class PratoController {

    private final PratoService pratoService;

    public PratoController(PratoService pratoService) {
        this.pratoService = pratoService;
    }

    @GetMapping
    public List<Prato> listarTodos() {
        return pratoService.listarTodos();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Prato> buscarPorId(@PathVariable Long id) {
        Prato prato = pratoService.buscarPorId(id);
        return ResponseEntity.ok(prato);
    }

    @PostMapping
    public ResponseEntity<Prato> salvar(@Valid @RequestBody Prato prato) {
        Prato pratoSalvo = pratoService.salvar(prato);
        return ResponseEntity.status(HttpStatus.CREATED).body(pratoSalvo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prato> atualizar(@PathVariable Long id, @Valid @RequestBody Prato prato) {
        Prato pratoAtualizado = pratoService.atualizar(id, prato);
        return ResponseEntity.ok(pratoAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        pratoService.excluir(id);
        return ResponseEntity.noContent().build();
    }
}