import React from 'react';

const Card = ({ Icon, card }) => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center text-center justify-between">
      {Icon && <Icon className="text-5xl text-rose-500" />}
      <p className="text-slate-600 font-semibold text-xl">{card.title}</p>
      <p className="text-slate-500 text-lg">{card.description}</p>
      <a className="btn-rose text-lg" href={card.cta.url} target={card.cta.url.includes("http") ? "_blank" : ""}>{card.cta.text}</a>
    </div>
  );
};

export default Card;