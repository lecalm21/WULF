const supertestrequest = require("supertest");
const app = require("../app");

test("testing if hpToKW route exists", () => {
  return supertestrequest(app).get("/api/hpkw").then(res => {
    expect(res.statusCode).toEqual(200);
  });
});

test("testing if kw is returned correctly for 10", () => {
  return supertestrequest(app).get("/api/hpkw?hp=10").then(res => {
    expect(res.body.kw).toBe(7.46);
  });
});

test("testing if static html content is returned", () => {
  return supertestrequest(app).get("/").then(res => {
    expect(res.statusCode).toEqual(200);
    expect(res.text).toMatch(/HPKW/);
  });
});

/*
test("testing if bmi route exists", () => {
  return supertestrequest(app).get("/api/bmi").then(res => {
    expect(res.statusCode).toEqual(200);
  });
});

test("testing if bmi is returned correctly for height 170 and weight 68", () => {
  return supertestrequest(app).get("/api/bmi?height=170&weight=68").then(res => {
    expect(res.body.bmi).toBe(23.5);
  });
});

test("testing if bmi is returned correctly for height 190 and weight 75", () => {
  return supertestrequest(app).get("/api/bmi?height=190&weight=75").then(res => {
    expect(res.body.bmi).toBe(20.7);
  });
});

test("testing if bmi is returned correctly for height 165 and weight 80", () => {
  return supertestrequest(app).get("/api/bmi?height=165&weight=80").then(res => {
    expect(res.body.bmi).toBe(29.3);
  });
});

test("testing if static html content is returned", () => {
  return supertestrequest(app).get("/").then(res => {
    expect(res.statusCode).toEqual(200);
    expect(res.text).toMatch(/BMI/);
  });
});
*/
