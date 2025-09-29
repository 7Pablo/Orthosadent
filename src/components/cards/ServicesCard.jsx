// ServicesCard.jsx (Client component)
'use client';

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import { Dialog, Portal  } from "@chakra-ui/react"

export default function ServicesCard({ img, alt, title, bodyShort, bodyLong }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <div className="services-card">
                    <div className="services-card__image">
                        <Image
                            src={img}
                            alt={alt}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="services-card__text">
                        <h2>{title}</h2>
                        <p>{bodyShort}</p>
                    </div>
                </div>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.CloseTrigger asChild>
                            <div className="services-pop__close">
                                <Image
                                    src={getAssetPath("/icons/close.png")}
                                    alt="x"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </Dialog.CloseTrigger>
                        <div className="services-pop">
                            <div className="services-pop__image">
                                <Image
                                    src={img}
                                    alt={alt}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="services-pop__wrapper">
                                <div className="services-pop__content">
                                    <h2>{title}</h2>
                                    <div className="services-pop__content--text">
                                        <p>{bodyLong}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}
