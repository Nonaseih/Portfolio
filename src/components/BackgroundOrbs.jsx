/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 18/12/2025 - 14:57:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Light Mode Orbs - Hidden */}
      <div className="hidden dark:hidden">
        {/* Orb 1 - Top Left - Teal */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            top: '-200px',
            left: '-200px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.08) 30%, rgba(20, 184, 166, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '0s',
          }}
        />
        
        {/* Orb 2 - Top Right - Light Teal */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            top: '-150px',
            right: '-150px',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle at center, rgba(45, 212, 191, 0.12) 0%, rgba(45, 212, 191, 0.06) 30%, rgba(45, 212, 191, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '1s',
          }}
        />
        
        {/* Orb 3 - Bottom Left - Cyan */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            bottom: '-200px',
            left: '-100px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0.06) 30%, rgba(6, 182, 212, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '2s',
          }}
        />

        {/* Orb 4 - Bottom Right - Gold accent */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            bottom: '-150px',
            right: '-200px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.08) 0%, rgba(251, 191, 36, 0.04) 30%, rgba(251, 191, 36, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '1.5s',
          }}
        />

        {/* Center glow - Teal/Gold */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.1) 0%, rgba(251, 191, 36, 0.06) 40%, rgba(20, 184, 166, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '2.5s',
          }}
        />
      </div>

      {/* Dark Mode Orbs - Keep existing vibrant colors */}
      <div className="hidden dark:block">
        {/* Orb 1 - Top Left - Gold */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            top: '-200px',
            left: '-200px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.5) 0%, rgba(212, 175, 55, 0.2) 30%, rgba(212, 175, 55, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '0s',
          }}
        />
        
        {/* Orb 2 - Top Right - Purple/Blue */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            top: '-150px',
            right: '-150px',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.45) 0%, rgba(168, 85, 247, 0.15) 30%, rgba(168, 85, 247, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '1s',
          }}
        />
        
        {/* Orb 3 - Bottom Left - Cyan/Blue */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            bottom: '-200px',
            left: '-100px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.45) 0%, rgba(34, 211, 238, 0.15) 30%, rgba(34, 211, 238, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '2s',
          }}
        />

        {/* Orb 4 - Bottom Right - Red/Orange */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            bottom: '-150px',
            right: '-200px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 30%, rgba(239, 68, 68, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '1.5s',
          }}
        />

        {/* Center glow - Gold/Purple */}
        <div 
          className="absolute animate-orb-pulse"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, rgba(168, 85, 247, 0.2) 40%, rgba(212, 175, 55, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animationDelay: '2.5s',
          }}
        />
      </div>
    </div>
  )
}
