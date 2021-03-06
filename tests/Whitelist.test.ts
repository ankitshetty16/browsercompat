/* tslint:disable no-big-function max-line-length no-duplicate-string mccabe-complexity cognitive-complexity */

import Whitelist from "../src/Whitelist";

let w: Whitelist;

beforeEach(() => {
    w = new Whitelist();

    w.addGlobal("A");
    w.addGlobal("B");
    w.addGlobal("C");
    w.addGlobal("G");
    w.addGlobal("*");

    w.addProperty("B", "x");
    w.addProperty("B", "y");
    w.addProperty("C", "x");
    w.addProperty("D", "y");
    w.addProperty("E", "z");
    w.addProperty("F", "*");
    w.addProperty("G", "*");
    w.addProperty("G", "x");

    w.addEvent("B", "ex");
    w.addEvent("B", "ey");
    w.addEvent("D", "ex");
    w.addEvent("D", "y");
    w.addEvent("F", "ex");
    w.addEvent("G", "*");
    w.addEvent("H", "*");
});

test("Whitelist.isGlobalWhitelisted", () => {
    expect(w.isGlobalWhitelisted("A")).toBe(true);
    expect(w.isGlobalWhitelisted("B")).toBe(true);
    expect(w.isGlobalWhitelisted("C")).toBe(true);
    expect(w.isGlobalWhitelisted("D")).toBe(false);
    expect(w.isGlobalWhitelisted("E")).toBe(false);
    expect(w.isGlobalWhitelisted("F")).toBe(false);
    expect(w.isGlobalWhitelisted("G")).toBe(true);
});

test("Whitelist.isPropertyOrEventWhitelisted", () => {
    expect(w.isPropertyOrEventWhitelisted("A", "x", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "y", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "z", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "ex", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "ey", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("B", "x", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("B", "y", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("B", "z", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("B", "ex", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("B", "ey", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "x", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("C", "y", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "z", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "ex", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "ey", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("D", "x", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("D", "y", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("D", "z", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("D", "ex", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("D", "ey", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "x", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "y", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "z", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("E", "ex", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "ey", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("F", "x", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("F", "y", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("F", "z", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("F", "ex", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("F", "ey", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "x", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "y", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "z", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "ex", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "ey", false)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("H", "x", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("H", "y", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("H", "z", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("H", "ex", false)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("H", "ey", false)).toBe(false);

    expect(w.isPropertyOrEventWhitelisted("A", "x", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "y", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "z", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "ex", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("A", "ey", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("B", "x", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("B", "y", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("B", "z", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("B", "ex", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("B", "ey", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("C", "x", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "y", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "z", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "ex", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("C", "ey", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("D", "x", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("D", "y", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("D", "z", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("D", "ex", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("D", "ey", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "x", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "y", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "z", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "ex", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("E", "ey", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("F", "x", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("F", "y", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("F", "z", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("F", "ex", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("F", "ey", true)).toBe(false);
    expect(w.isPropertyOrEventWhitelisted("G", "x", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "y", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "z", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "ex", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("G", "ey", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("H", "x", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("H", "y", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("H", "z", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("H", "ex", true)).toBe(true);
    expect(w.isPropertyOrEventWhitelisted("H", "ey", true)).toBe(true);
});
