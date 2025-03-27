import {
	BiSolidArrowToBottom as Last,
	BiSolidArrowToTop as First,
	BiSolidDownArrowAlt as Down,
	BiSolidUpArrowAlt as Up
} from "react-icons/bi";
import { Song } from "./types";
import { memo, MouseEvent } from "react";

interface PlaylistItemProps {
	song: Song;
	index: number;
	move: (index: number) => (evt: MouseEvent<HTMLButtonElement>) => void;
}

export const PlaylistItem = memo(function PlaylistItem({ song, index, move }: PlaylistItemProps) {
	const onClick = move(index);

	return (
		<li>
			<span>{index + 1}</span>
			<p>
				<strong>{song.title}</strong> by <em>{song.artist}</em>
			</p>
			<button name="up" onClick={onClick}>
				<Up />
			</button>
			<button name="down" onClick={onClick}>
				<Down />
			</button>
			<button name="first" onClick={onClick}>
				<First />
			</button>
			<button name="last" onClick={onClick}>
				<Last />
			</button>
		</li>
	);
});
