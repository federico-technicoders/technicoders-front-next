import { SectionPage } from "../SectionPage/SectionPage"

const video = {
    poster: '/assets/images/image2.webp',
    source: '/assets/videos/intro-factoria-video.mp4'
}

const VideoWraper = ({video}) => {
    return (
        <video 
            autoPlay={true} 
            playsInline={true} 
            muted={true} 
            loop={true} 
            preload="auto" 
            poster={video.poster} 
            className="top-0 left-0 w-full min-w-full h-screen object-cover -z-10"
        >
            <source src={video.source} type="video/mp4" />
        </video>
    )
}

export const VideoSection = () => {
    return (
        <SectionPage>
            <div className="">
                <VideoWraper video={video} />
            </div>
        </SectionPage>
    )
}
