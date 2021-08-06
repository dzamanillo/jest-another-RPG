const Player = require("../lib/Player.js");
const Potion = require("../lib/Potion.js");

jest.mock("../lib/Potion");

test("creates player obj", () => {
	const player = new Player("Dan");

	expect(player.name).toBe("Dan");
	expect(player.health).toEqual(expect.any(Number));
	expect(player.strength).toEqual(expect.any(Number));
	expect(player.agility).toEqual(expect.any(Number));
	expect(player.inventory).toEqual(
		expect.arrayContaining([expect.any(Object)])
	);
});
