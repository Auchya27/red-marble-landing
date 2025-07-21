// components/AnimeCard.tsx
import { Heart, HeartOff } from "lucide-react";
import { useState } from "react";

interface AnimeCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

const Card: React.FC<AnimeCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const [fav, setFav] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setFav(!fav);
    onToggleFavorite?.(id);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{title}</h2>
          <button onClick={handleFavoriteClick} className="text-red-500 hover:scale-110 transition">
            {fav ? <Heart className="w-5 h-5 fill-red-500" /> : <HeartOff className="w-5 h-5" />}
          </button>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
