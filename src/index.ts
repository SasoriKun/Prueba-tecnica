import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import releases from "./entities/Releases";

const server = express();

server.use(bodyParser.json());

server.get("/releases/:id/environments", (req: Request, res: Response) => {
  const response = releases.getEnvironmentsByReleaseId(Number(req.params.id));
  res.status(200).send({ environments: response });
});

server.get(
  "/releases/:releaseId/environments/:environmentId",
  (req: Request, res: Response) => {
    const response = releases.getEnvironmentByReleaseId({
      environmentId: Number(req.params.environmentId),
      releaseId: Number(req.params.releaseId),
    });
    if (response) {
      return res.status(200).send({ environment: response });
    }

    res.status(404).send({
      message: "oops the resource you're trying to find doesn't exist",
    });
  }
);

server.get("/releases/:id/prodEnvironment", (req: Request, res: Response) => {
  const response = releases.getReleaseProdEnvironment({
    releaseId: Number(req.params.id),
  });
  if (response) {
    return res.status(200).send(response);
  }

  res.status(404).send({
    message: "Oops the resource you're trying to find doesn't exist",
  });
});

server.post("/releases/:id/addEnvironment", (req: Request, res: Response) => {
  const response = releases.addReleaseEnvironment({
    releaseId: Number(req.params.id),
    environment: req.body,
  });

  res.send(response);
});

server.listen(4000, () => {
  console.log("server running at: http://localhost:4000");
});
