"use client"

import { useEffect, useState } from "react";
import { listVideos as initialList } from "./database/list";
import Header from "./components/Header";
import Search from "./components/Search";
import ListVideos from "./components/ListVideos";
import ToggleButton from "./components/ToggleButton";

export default function Home() {
  const [videos, setVideos] = useState(initialList) //lista de videos orginal
  const [filteredVideos, setFilteredVideos] = useState(initialList) // lista de videos filtrada
  const [search, setSearch] = useState('')
  const [showFavorites, setShowFavorites] = useState(false)

  const filterVideos = () => {
    // Filtra com base na pesquisa
    let filtered = videos.filter(video =>
      video.title.toLowerCase().includes(search.toLowerCase())
    );

    // Se estiver mostrando favoritos, filtra somente os favoritos
    if (showFavorites) {
      filtered = filtered.filter(video => video.isFavorite);
    }

    return filtered;
  };

  useEffect(() => {
    // Atualiza a lista de vídeos filtrados
    setFilteredVideos(filterVideos());
  }, [search, showFavorites, videos]); // Atualiza sempre que a busca, favoritos ou lista de vídeos mudar

  return (
   <div className="w-full min-h-screen p-8 bg-slate-950">
      <div className="flex justify-center items-center">
        <div className="w-[800px] p-4 bg-slate-100 rounded">
          <Header 
            title='React Videos'
            subtitle='Uma breve história do React'
          />

          <Search 
            setSearch={setSearch}
          />

          <div className="flex gap-1 mb-4">
            <ToggleButton
              isActive={!showFavorites}
              onClick={() => setShowFavorites(false)}
              label="Todos"
            />
            <ToggleButton
              isActive={showFavorites}
              onClick={() => setShowFavorites(true)}
              label="Favoritos"
            />
          </div>

          <ListVideos 
            search={search}
            videos={filteredVideos}
            setVideos={setVideos}
            showFavorites={showFavorites}
          />
        </div>
      </div>
   </div>
  );
}
