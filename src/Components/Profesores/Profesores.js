"use client"

import { useState } from "react"
import styles from "./Profesores.module.css"
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai"
import { FaFilePdf, FaLink, FaTimes } from "react-icons/fa"

const Profesores = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [selectedResource, setSelectedResource] = useState(null)

    const [reactions, setReactions] = useState({
        featured: [
            { likes: 23, dislikes: 2, userLiked: false, userDisliked: false },
            { likes: 45, dislikes: 1, userLiked: false, userDisliked: false },
        ],
        resources: [
            { likes: 15, dislikes: 0, userLiked: false, userDisliked: false },
            { likes: 12, dislikes: 3, userLiked: false, userDisliked: false },
            { likes: 31, dislikes: 0, userLiked: false, userDisliked: false },
            { likes: 25, dislikes: 0, userLiked: false, userDisliked: false },
            { likes: 42, dislikes: 1, userLiked: false, userDisliked: false },
            { likes: 58, dislikes: 5, userLiked: false, userDisliked: false },
        ],
    })

    const featuredContent = [
        {
            id: 1,
            title: "Aviso Importante",
            description: "Reunión de personal obligatoria el próximo viernes. Consultar detalles en la circular enviada.",
            image: "/important-notice-document.jpg",
        },
        {
            id: 2,
            title: "Nuevo Material Didáctico",
            description: "Se ha actualizado el material de apoyo para las clases de matemática avanzada.",
            image: "/educational-materials.png",
        },
    ]

    const resources = [
        {
            id: 1,
            type: "pdf",
            title: "Planilla de Asistencia",
            description: "Descargue el nuevo formato de planilla para el ciclo lectivo actual.",
            fullContent:
                "Descargue el nuevo formato de planilla para el ciclo lectivo actual. Este documento incluye todas las secciones necesarias para el registro diario de asistencia, con espacios para observaciones y firmas correspondientes.",
            downloadUrl: '/instructivoDocente.pdf',
            size: "small",
        },
        {
            id: 2,
            type: "text",
            title: "Avisos Generales",
            description:
                "Las solicitudes de material de librería se realizan los días lunes y miércoles. Recordar registrar la salida del establecimiento en la planilla de portería.",
            fullContent:
                "Las solicitudes de material de librería se realizan los días lunes y miércoles. Recordar registrar la salida del establecimiento en la planilla de portería. El próximo feriado será el 17 de Agosto. Las mesas de examen de Septiembre se realizarán la segunda semana del mes. Se ruega mantener la limpieza de la sala de profesores. Cualquier consulta adicional puede realizarse en secretaría de 8:00 a 16:00 hs.",
            size: "xlarge",
        },
        {
            id: 3,
            type: "pdf",
            title: "Protocolo de Emergencia",
            description: "Instructivo actualizado sobre los procedimientos a seguir.",
            fullContent:
                "Instructivo actualizado sobre los procedimientos a seguir en caso de emergencia. Incluye rutas de evacuación, puntos de encuentro, y responsables de cada sector. Es obligatorio que todo el personal conozca este protocolo.",
            downloadUrl: "#",
            size: "medium",
        },
        {
            id: 4,
            type: "pdf",
            title: "Reglamento Interno",
            description: "Consulte la versión actualizada del reglamento de la institución.",
            fullContent:
                "Consulte la versión actualizada del reglamento de la institución. Este documento contiene las normativas vigentes, derechos y obligaciones del personal docente, horarios, licencias, y procedimientos administrativos.",
            downloadUrl: "#",
            size: "xsmall",
        },
        {
            id: 5,
            type: "pdf",
            title: "Justificación de Inasistencias",
            description:
                "Se recuerda al personal que las justificaciones por inasistencia deben presentarse en la secretaría dentro de las 48 horas hábiles.",
            fullContent:
                "Se recuerda al personal que las justificaciones por inasistencia deben presentarse en la secretaría dentro de las 48 horas hábiles. Es imperativo adjuntar el certificado médico correspondiente si aplica. Las inasistencias no justificadas en tiempo y forma serán consideradas como faltas injustificadas según el reglamento interno.",
            downloadUrl: "#",
            size: "large",
        },
        {
            id: 6,
            type: "link",
            title: "Recursos Educativos",
            description: "Acceda al portal con material didáctico digital y herramientas online.",
            fullContent:
                "Acceda al portal con material didáctico digital y herramientas online. Encontrará videos educativos, presentaciones interactivas, ejercicios descargables, y recursos multimedia para enriquecer sus clases. El portal se actualiza semanalmente con nuevo contenido.",
            visitUrl: "#",
            size: "medium",
        },
    ]

    const handleFeaturedLike = (e, index) => {
        e.stopPropagation()
        setReactions((prev) => {
            const newFeatured = [...prev.featured]
            if (newFeatured[index].userLiked) {
                newFeatured[index].likes -= 1
                newFeatured[index].userLiked = false
            } else {
                newFeatured[index].likes += 1
                newFeatured[index].userLiked = true
                if (newFeatured[index].userDisliked) {
                    newFeatured[index].dislikes -= 1
                    newFeatured[index].userDisliked = false
                }
            }
            return { ...prev, featured: newFeatured }
        })
    }

    const handleFeaturedDislike = (e, index) => {
        e.stopPropagation()
        setReactions((prev) => {
            const newFeatured = [...prev.featured]
            if (newFeatured[index].userDisliked) {
                newFeatured[index].dislikes -= 1
                newFeatured[index].userDisliked = false
            } else {
                newFeatured[index].dislikes += 1
                newFeatured[index].userDisliked = true
                if (newFeatured[index].userLiked) {
                    newFeatured[index].likes -= 1
                    newFeatured[index].userLiked = false
                }
            }
            return { ...prev, featured: newFeatured }
        })
    }

    const handleResourceLike = (e, index) => {
        e.stopPropagation()
        setReactions((prev) => {
            const newResources = [...prev.resources]
            if (newResources[index].userLiked) {
                newResources[index].likes -= 1
                newResources[index].userLiked = false
            } else {
                newResources[index].likes += 1
                newResources[index].userLiked = true
                if (newResources[index].userDisliked) {
                    newResources[index].dislikes -= 1
                    newResources[index].userDisliked = false
                }
            }
            return { ...prev, resources: newResources }
        })
    }

    const handleResourceDislike = (e, index) => {
        e.stopPropagation()
        setReactions((prev) => {
            const newResources = [...prev.resources]
            if (newResources[index].userDisliked) {
                newResources[index].dislikes -= 1
                newResources[index].userDisliked = false
            } else {
                newResources[index].dislikes += 1
                newResources[index].userDisliked = true
                if (newResources[index].userLiked) {
                    newResources[index].likes -= 1
                    newResources[index].userLiked = false
                }
            }
            return { ...prev, resources: newResources }
        })
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length)
    }

    const openModal = (resource, index) => {
        setSelectedResource({ ...resource, index })
    }

    const closeModal = () => {
        setSelectedResource(null)
    }

 
    const handleDownload = (downloadUrl) => {
        window.open(downloadUrl, '_blank')
    }


    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Contenido para Docentes</h1>
                <p>Recursos, avisos e instructivos para el cuerpo docente.</p>
            </div>

            {/* <div className={styles.featured}>
                <div className={styles.carousel}>
                    <button className={styles.carouselBtn} onClick={prevSlide}>
                        ‹
                    </button>

                    <div className={styles.carouselContent}>
                        <div className={styles.carouselImage}>
                            <div
                                className={styles.documentPreview}
                                style={{ backgroundImage: `url(${featuredContent[currentSlide].image})` }}
                            />
                        </div>
                        <div className={styles.carouselInfo}>
                            <h2>{featuredContent[currentSlide].title}</h2>
                            <p>{featuredContent[currentSlide].description}</p>
                            <div className={styles.reactions}>
                                <button
                                    className={`${styles.like} ${reactions.featured[currentSlide].userLiked ? styles.active : ""}`}
                                    onClick={(e) => handleFeaturedLike(e, currentSlide)}
                                >
                                    {reactions.featured[currentSlide].userLiked ? <AiFillLike /> : <AiOutlineLike />}
                                    {reactions.featured[currentSlide].likes}
                                </button>
                                <button
                                    className={`${styles.dislike} ${reactions.featured[currentSlide].userDisliked ? styles.active : ""}`}
                                    onClick={(e) => handleFeaturedDislike(e, currentSlide)}
                                >
                                    {reactions.featured[currentSlide].userDisliked ? <AiFillDislike /> : <AiOutlineDislike />}
                                    {reactions.featured[currentSlide].dislikes}
                                </button>
                            </div>
                        </div>
                    </div>

                    <button className={styles.carouselBtn} onClick={nextSlide}>
                        ›
                    </button>
                </div>
            </div> */}

            <div className={styles.resourcesGrid}>
                {resources.map((resource, index) => (
                    <div
                        key={resource.id}
                        className={`${styles.resourceCard} ${styles[resource.size]}`}
                        onClick={() => openModal(resource, index)}
                    >
                        <div className={styles.cardIcon}>
                            {resource.type === "pdf" ? (
                                <FaFilePdf size={50} />
                            ) : resource.type === "link" ? (
                                <FaLink size={50} />
                            ) : (
                                <div className={styles.textIcon}>Aa</div>
                            )}
                        </div>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                        {/* <div className={styles.reactions}>
                            <button
                                className={`${styles.like} ${reactions.resources[index].userLiked ? styles.active : ""}`}
                                onClick={(e) => handleResourceLike(e, index)}
                            >
                                {reactions.resources[index].userLiked ? <AiFillLike /> : <AiOutlineLike />}
                                {reactions.resources[index].likes}
                            </button>
                            <button
                                className={`${styles.dislike} ${reactions.resources[index].userDisliked ? styles.active : ""}`}
                                onClick={(e) => handleResourceDislike(e, index)}
                            >
                                {reactions.resources[index].userDisliked ? <AiFillDislike /> : <AiOutlineDislike />}
                                {reactions.resources[index].dislikes}
                            </button>
                        </div> */}
                    </div>
                ))}
            </div>

            {selectedResource && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className={styles.modalIcon}>
                            {selectedResource.type === "pdf" ? (
                                <FaFilePdf size={60} />
                            ) : selectedResource.type === "link" ? (
                                <FaLink size={60} />
                            ) : (
                                <div className={styles.textIcon}>Aa</div>
                            )}
                        </div>

                        <h2>{selectedResource.title}</h2>
                        <p className={styles.modalDescription}>{selectedResource.fullContent}</p>

                        {/* <div className={styles.modalReactions}>
                            <button
                                className={`${styles.like} ${reactions.resources[selectedResource.index].userLiked ? styles.active : ""}`}
                                onClick={(e) => handleResourceLike(e, selectedResource.index)}
                            >
                                {reactions.resources[selectedResource.index].userLiked ? <AiFillLike /> : <AiOutlineLike />}
                                {reactions.resources[selectedResource.index].likes}
                            </button>
                            <button
                                className={`${styles.dislike} ${reactions.resources[selectedResource.index].userDisliked ? styles.active : ""}`}
                                onClick={(e) => handleResourceDislike(e, selectedResource.index)}
                            >
                                {reactions.resources[selectedResource.index].userDisliked ? <AiFillDislike /> : <AiOutlineDislike />}
                                {reactions.resources[selectedResource.index].dislikes}
                            </button>
                        </div> */}

                        {selectedResource.downloadUrl && (
                            <button 
                                onClick={() => handleDownload(selectedResource.downloadUrl)} 
                                className={styles.actionBtn}
                            >
                                Mas info
                            </button>
                        )}
                        {selectedResource.visitUrl && (
                            <a href={selectedResource.visitUrl} className={styles.actionBtn}>
                                Mas info
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profesores
