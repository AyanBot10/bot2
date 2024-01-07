const axios = require('axios');

module.exports = {
  config: {
    name: "imagine",
    aliases: ["imag"],
    version: "1.1",
    author: "faheem",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: 'Text to Image'
    },
    longDescription: {
      en: "Text to image"
    },
    category: "image",
    guide: {
      en: 'Type -imagine or -t2i with your prompts | (number which model do you want)\ are the Supported models:\nalog-diffusion-1.0\nythingv3_0\nything-v4.5\nything-V5\OM3A3_Orangemix\eliberate_v2\reamlike-diffusion-1.0\reamlike-diffusion-2.0\reamshaper_5BakedVae\Dreamshaper_6BakedVae\Dreamshaper_7\Elldreths-vivid-mix\Lyriel_v15\Lyriel_v16\Mechamix_v10\Meinamix_meinaV9\Openjourney_V4\Portrait+1.0\PortraitPlus_V1.0\Realistic_Vision_V1.4\Realistic_Vision_V2.0\Realistic_Vision_V4.0\RevAnimated_v122\Riffusion-Model-V1\Sdv1_4\V1-5\ShoninsBeautiful_v10\Theallys-mix-ii\Timeless-1.0\EimisAnimeDiffusion_V1.0\Meinamix_v11'
    }
  },

  onStart: async function ({ message, args }) {
    const text = args.join(" ");
    if (!text) {
      return message.reply("Please provide a prompt.");
    }

    let prompt, model;
    if (text.includes("|")) {
      const [promptText, modelText] = text.split("|").map((str) => str.trim());
      prompt = promptText;
      model = modelText;
    } else {
      prompt = text;
      model = "23";  
    }

    let id; 

    message.reply("✅| Creating your Imagination...").then((info) => {
      id = info.messageID;  
    });

    try {
      const API = `https://gen.blackxlegend1.repl.co/imagine?model=${model}&prompt=${encodeURIComponent(prompt)}`;
      const imageStream = await global.utils.getStreamFromURL(API);

      return message.reply({
        attachment: imageStream
      });
    } catch (error) {
      console.log(error);
      message.reply("Failed to generate your imagination.").then(() => {
        message.delete(id);
      });
    }
  }
};