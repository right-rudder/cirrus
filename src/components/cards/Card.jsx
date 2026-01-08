import React from 'react';

const Card = ({ Icon, card }) => {
  return (
    <div class="p-4 flex flex-col gap-4 items-center text-center justify-between">
      {Icon && <Icon className="text-5xl text-rose-500" />}
      <p class="text-slate-600 font-semibold text-xl">{card.title}</p>
      <p class="text-slate-500 text-lg">{card.description}</p>
      <a class="btn-rose text-lg" href={card.cta.url} target={card.cta.url.includes("http") ? "_blank" : ""}>{card.cta.text}</a>
    </div>
  );
};

export default Card;