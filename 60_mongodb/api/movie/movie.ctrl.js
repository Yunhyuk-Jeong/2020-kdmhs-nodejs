const MovieModel = require("../../models/movie");
const mongoose = require("mongoose");

// 목록조회
const list = (req, res) => {
  let limit = req.query.limit || 10; // string
  limit = parseInt(limit, 10); // number

  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }

  MovieModel.find((err, result) => {
    if (err) return res.status(500).end();
    //res.json(result);
    res.render("movie/list", { result });
  })
    .limit(limit)
    .sort({ _id: -1 });
};

// 상세조회
const detail = (req, res) => {
  const id = req.params.id;

  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).end();
    if (!result) return res.status(404).end();
    //res.json(result);
    res.render("movie/detail", { result });
  });
};

// 등록
const create = (req, res) => {
  const { title, director, year } = req.body;
  if (!title || !director || !year) return res.status(400).end();

  MovieModel.create({ title, director, year }, (err, result) => {
    if (err) return res.status(500).end();
    res.status(201).json(result);
  });
};

// 수정
const update = (req, res) => {
  const id = req.params.id;
  const { title, director, year } = req.body;

  MovieModel.findByIdAndUpdate(
    id,
    { title, director, year },
    { new: true },
    (err, result) => {
      if (err) return res.status(500).send("수정 시 오류가 발생했습니다.");
      if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
      res.json(result);
    }
  );
};

// 삭제
const remove = (req, res) => {
  const id = req.params.id;
  const { title, director, year } = req.body;

  MovieModel.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(500).send("삭제 시 오류가 발생했습니다.");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
    res.json(result);
  });
};

const checkID = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).end();
  }
  next();
};

const showCreatePage = (req, res) => {
  res.render("movie/create");
};

const showUpdatePage = (req, res) => {
  const id = req.params.id;

  MovieModel.findById(id, (err, result) => {
    if (err) return res.status(500).send("조회시 오류가 발생했습니다.");
    if (!result) return res.status(404).send("해당하는 정보가 없습니다.");
    res.render("movie/update", { result });
  });
};

module.exports = {
  list,
  detail,
  create,
  update,
  remove,
  checkID,
  showCreatePage,
  showUpdatePage,
};
