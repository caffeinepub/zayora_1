import { useCountdownTimer } from '../hooks/useCountdownTimer';

export default function AnnouncementBanner() {
  const { hours, minutes, seconds } = useCountdownTimer();

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 py-3 text-white">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="mx-8 text-lg font-bold">
              👗 New Fashion Collection — Style that speaks for you! Shop Now 👗
            </span>
            <span className="mx-8 text-lg font-bold">
              👗 New Fashion Collection — Style that speaks for you! Shop Now 👗
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 backdrop-blur-sm">
          <span className="text-sm font-medium">Offer ends in:</span>
          <div className="flex items-center gap-1 font-mono text-lg font-bold">
            <span>{formatTime(hours)}</span>
            <span>:</span>
            <span>{formatTime(minutes)}</span>
            <span>:</span>
            <span>{formatTime(seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
