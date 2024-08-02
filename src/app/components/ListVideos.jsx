import Video from "./Video";

export default function ListVideos({ search, videos, setVideos, showFavorites }) {
    
  // Função para favoritar um video
    const toggleFavorite = (videoID) => {
        setVideos((prevVideos) => 
          prevVideos.map((video) => 
            video.id === videoID ? {...video, isFavorite: !video.isFavorite} : video
          )
        )
      }
    
    const message = () => {
      // Determina o texto base de acordo com o tipo de exibição (favoritos ou busca)
      const baseMessage = showFavorites 
        ? "Nenhum vídeo favoritado encontrado" 
        : `Busca por "${search}" não encontrada`;
    
      // Determina a quantidade de vídeos e a mensagem de pluralização
      const videoCountMessage = videos.length === 0 
        ? baseMessage 
        : `${videos.length} ${videos.length === 1 ? 'vídeo' : 'vídeos'}`;
    
      return videoCountMessage;
    };

    return (
        <div>
            <div className="text-lg font-bold">
               {message()}
            </div>
            <div>
                {videos.map(video => (
                  <Video 
                      key={video.id}
                      title={video.title}
                      subtitle={video.subtitle}
                      image={video.image}
                      isFavorite={video.isFavorite}
                      onToggleFavorite={() => toggleFavorite(video.id)}
                  />
                ))}
            </div>
        </div>
    )
}