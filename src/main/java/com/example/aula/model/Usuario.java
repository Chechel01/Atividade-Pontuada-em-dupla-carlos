package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Escreva o nome do prato.")
    private String nomePrato;

    @NotBlank(message = "coloque a descrição.")
    private String descricao;

    @NotNull(message = "Coloque o preço do prato.")
    @Positive(message = "O preço deve ser positivo.")
    private int preco;

    @NotNull(message = "Qual a categoria.")
    private String categoria;

    @NotNull(message = "coloque a disponibilidade do item.")
    private String disponibilidade;

    @NotBlank(message = "colocação de imagem.")
    @Column(name = "url_imagem", nullable = false)
    private String urlImagem;

    public Usuario() {
    }

    public Usuario(Long id, String nomePrato, String descricao, int preco, String categoria, String disponibilidade, String urlImagem) {
        this.id = id;
        this.nomePrato = nomeDoPrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem; // URL padrão para a imagem
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeDoPrato() {
        return nomeDoPrato;
    }

    public void setNomeDoPrato(String nomeDoPrato) {
        this.nomePrato = nomePrato;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(String disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public String getUrlImagem() {
        return urlImagem;
    }
    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }
}


