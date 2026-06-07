import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL(import.meta.resolve("content/test.md")),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("blue")
    .setDescription("very blue"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
