package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.math.BigDecimal;

// Enum para valores fixos de disponibilidade
enum StatusDisponibilidade {
    DISPONIVEL,
    INDISPONIVEL
}

@Entity
@Table(name = "pratos")
public class Prato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do prato é obrigatório.")
    @Column(unique = true) // Garante que o nome do prato seja único no banco
    private String nomePrato;

    @NotBlank(message = "A descrição é obrigatória.")
    private String descricao;

    @NotNull(message = "O preço é obrigatório.")
    @Positive(message = "O preço deve ser positivo.")
    private BigDecimal preco;

    @NotBlank(message = "A categoria é obrigatória.")
    private String categoria;

    @NotNull(message = "A disponibilidade é obrigatória.")
    @Enumerated(EnumType.STRING) // Salva o nome do enum ("DISPONIVEL") no banco
    private StatusDisponibilidade disponibilidade;

    @NotBlank(message = "A URL da imagem é obrigatória.")
    @Column(name = "url_imagem")
    private String urlImagem;

    public Prato() {
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNomePrato() { return nomePrato; }
    public void setNomePrato(String nomePrato) { this.nomePrato = nomePrato; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public BigDecimal getPreco() { return preco; }
    public void setPreco(BigDecimal preco) { this.preco = preco; }
    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    public StatusDisponibilidade getDisponibilidade() { return disponibilidade; }
    public void setDisponibilidade(StatusDisponibilidade disponibilidade) { this.disponibilidade = disponibilidade; }
    public String getUrlImagem() { return urlImagem; }
    public void setUrlImagem(String urlImagem) { this.urlImagem = urlImagem; }
}