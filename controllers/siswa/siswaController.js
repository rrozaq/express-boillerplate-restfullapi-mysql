'use strict'

const connection = require('../../config/connection')
const response = require('../../helpers/res');

exports.index = (req, res) => {
    connection.query("SELECT * FROM tb_siswa", function(error, rows, fields){
        if(error) {
            connection.log(error);
        }else{
            response.success(rows, res, "Data siswa");
        }
    });
};

exports.show = (req, res) => {
    let id = req.params.id;
    
    connection.query("SELECT * FROM tb_siswa WHERE id = ?", [id], function(error, rows, fields){
        if(error) {
            connection.log(error);
        } else {
            response.success(rows, res, "Data siswa");
        }
    });
};

exports.store = (req, res) => {
    let nama = req.body.nama;
    let kelas = req.body.kelas;
    let alamat = req.body.alamat;

    connection.query("INSERT INTO tb_siswa VALUES (NULL, ?, ?, ?)", [nama, kelas, alamat], function(error, rows, fields){
        if(error) {
            console.log(error);
        } else {
            response.success(rows, res, "Data berhasil ditambahkan");
        }
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    let nama = req.body.nama;
    let kelas = req.body.kelas;
    let alamat = req.body.alamat;

    connection.query("UPDATE tb_siswa SET nama = ?, kelas = ?, alamat = ? WHERE id = ?", [nama, kelas, alamat, id], function(error, rows, fields){
        if(error) {
            console.log(error);
        } else {
            response.success(rows, res, "Data berhasil diupdate");
        }
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;

    connection.query("DELETE FROM tb_siswa WHERE id = ?", [id], function(error, rows, fields){
        if(error) {
            connection.log(error);
        } else {
            response.success(rows, res, "Data Berhasil dihapus");
        }
    });
}