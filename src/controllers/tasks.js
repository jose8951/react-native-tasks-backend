import { connect } from "../database";

export const getTasks = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("Select * from tasks");
  //console.log(rows);
  res.json(rows);
};
export const getTask = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * from tasks where id=?", [
    req.params.id,
  ]);
  // console.log(rows[0]);
  res.json(rows[0]);
};
export const getTaskCount = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("select count(*) from tasks");
  // console.log(rows[0]["count(*)"]);
  res.json(rows[0]["count(*)"]);
};

export const saveTask = async (req, res) => {
  const db = await connect();
  const [result] = await db.query(
    "INSERT INTO tasks(title, description) VALUES(?,?)",
    [req.body.title, req.body.description]
  );
  // console.log([result]);
  res.json({
    id: result.insertId,
    ...req.body,
  });
};

export const deleteTask = async (req, res) => {
  const db = await connect();
  const result = await db.query("delete from tasks WHERE id=?", [
    req.params.id,
  ]);
  // console.log(result);
  res.sendStatus(204);
};
export const updateTask = async (req, res) => {
  const db = await connect();
  const [result] = await db.query("update tasks set ? where id=?", [
    req.body,
    req.params.id,
  ]);
  // console.log(result);
  res.json(result.affectedRows);
};
