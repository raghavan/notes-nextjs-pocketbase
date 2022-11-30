import Link from 'next/link';
import styles from './Notes.module.css';
export default function Note({note}: any) {
    return (
        <div>
            <Link href={`/notes/${note.id}`}>
                <div className={styles.note}>
                    <h3>{note.title}</h3>
                    <h5>{note.content}</h5>
                    <p>{note.created}</p>
                </div>
            </Link>
        </div>
    );
}
