<template>
  <div class="quotes">
    <span>
      <button @click="number--">&lt;</button>
      <button @click="number++">&gt;</button>
    </span>
    <Quote>
      <h2 slot="title">{{ Quotes[indice].font }}</h2>
      <p class="body" slot="body">"{{ Quotes[indice].text }}"</p>
      <p class="footer" slot="footer">{{ Quotes[indice].author }}</p>
    </Quote>
  </div>
</template>

<script>
import Quote from "@/components/Quote.vue";

export default {
  components: { Quote },
  data() {
    return {
      number: 0,
      Quotes: [
        {
          font: "Jornal do Empreendedor",
          text:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          author: "Margaret Mead"
        },
        {
          font: "Frases de Mãe",
          text: "Isso não é um quarto, é um chiqueiro.",
          author: "Roberta"
        },
        {
          font: "Frases de Pai",
          text: "Vou contar até 3! 1, 2, 2...",
          author: "Gustavo"
        }
      ]
    };
  },
  computed: {
    indice() {
      return Math.abs(this.number % 3);
    }
  }
};
</script>

<style scoped>
.footer{
  text-align:right;
  font-weight:bold
}

.body {
  /* text-align: center; */
}

.quotes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  text-align: center;
}
</style>
