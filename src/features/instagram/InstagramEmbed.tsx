type InstagramEmbedProps = {
  postUrl: string;
};

// O Instagram só aceita a página de embed no formato /p/<código>/embed/ (sem o nome da conta).
function getEmbedUrl(postUrl: string) {
  const [, type, code] = postUrl.match(/\/(p|reel)\/([\w-]+)/) ?? [];
  return `https://www.instagram.com/${type}/${code}/embed/`;
}

export function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      <iframe
        src={getEmbedUrl(postUrl)}
        title="Postagem do Instagram"
        loading="lazy"
        scrolling="no"
        className="block h-[36rem] w-full"
      />
    </div>
  );
}
