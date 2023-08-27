const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(input);

    expect(result).toEqual(expected);
  });

  it("Function should throw TypeError when used without parament", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  it("Sorting an empty array should return an empty array", () => {
    const input = [];
    const result = sorting.sortByName(input);

    expect(result).toEqual([]);
  });

  it("Sorting an array with one element should return the same array", () => {
    const input = ["Гарри Поттер"];
    const result = sorting.sortByName(input);

    expect(result).toEqual(["Гарри Поттер"]);
  });

  it("Sorting an array with identical elements should return the same array", () => {
    const input = ["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"];
    const result = sorting.sortByName(input);

    expect(result).toEqual(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"]);
  });
});
